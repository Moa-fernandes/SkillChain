from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from database import get_db
from models import Teste

router = APIRouter()


@router.get("/empresa/teste")
def listar_testes(vaga_id: int = Query(...), db: Session = Depends(get_db)):
    testes = db.query(Teste).filter(Teste.vaga_id == vaga_id).all()
    return [
        {
            "id": t.id,
            "vaga_id": t.vaga_id,
            "pergunta": t.pergunta,
            "resposta_correta": t.resposta_correta,
        }
        for t in testes
    ]
