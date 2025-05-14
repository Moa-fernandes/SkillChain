
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
from models import Resposta, Teste

router = APIRouter(prefix="/respostas", tags=["respostas"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/")
def responder_teste(user_id: int, respostas: list[dict], db: Session = Depends(get_db)):
    resultado = []
    for item in respostas:
        teste_id = item["teste_id"]
        resposta_usuario = item["resposta"]
        teste = db.query(Teste).filter(Teste.id == teste_id).first()
        correta = 1 if teste and resposta_usuario.strip().lower() == teste.resposta_correta.strip().lower() else 0
        db.add(Resposta(user_id=user_id, teste_id=teste_id, resposta_usuario=resposta_usuario, correta=correta))
        resultado.append(correta)
    db.commit()
    score = sum(resultado)
    return {"resultado": resultado, "pontuacao": f"{score}/10"}
