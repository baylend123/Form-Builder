from .db import db


class Form(db.Model):
    __tablename__ = 'Form'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, nullable=False, unique=False)
    JSX = db.Column(db.Text, nullable=False, unique=True)

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'JSX': self.JSX
        }
