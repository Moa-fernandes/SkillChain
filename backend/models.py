
from sqlalchemy import Column, Integer, String, Text, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String)
    email = Column(String, unique=True)
    senha = Column(String)
    cidade = Column(String)
    tipo_usuario = Column(String)

class Empresa(Base):
    __tablename__ = "empresas"
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String)
    email = Column(String, unique=True)
    senha = Column(String)
    cnpj = Column(String)

class Vaga(Base):
    __tablename__ = "vagas"
    id = Column(Integer, primary_key=True, index=True)
    empresa_id = Column(Integer, ForeignKey("empresas.id"))
    titulo = Column(String)
    descricao = Column(Text)

class Teste(Base):
    __tablename__ = "testes"
    id = Column(Integer, primary_key=True, index=True)
    vaga_id = Column(Integer, ForeignKey("vagas.id"))
    pergunta = Column(Text)
    resposta_correta = Column(String)

class Resposta(Base):
    __tablename__ = "respostas"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    teste_id = Column(Integer, ForeignKey("testes.id"))
    resposta_usuario = Column(String)
    correta = Column(Integer)
