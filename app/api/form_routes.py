from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Form, db


form_routes = Blueprint('form', __name__)


@form_routes.route('/mine')
@login_required
def index():
    myForms = Form.query.filter(current_user.id == Form.userId).all()
    formsList = []
    for form in myForms:
        formDict = {'id': form.to_dict()['id'],
                    'JSX': form.to_dict()['JSX']
                    }
        formsList.append(formDict)

    return {'myForms': formsList}


@form_routes.route('/add', methods=['POST'])
@login_required
def add():
    userId = current_user.id
    newForm = Form()
    newForm.userId = userId
    newForm.JSX = request.get_json()['jsx']
    print(request.get_json())
    db.session.add(newForm)
    db.session.commit()
    return {'': ''}


@form_routes.route('/all')
@login_required
def all():
    user = current_user
    allFormsThatArentMine = Form.query.filter(
        Form.userId != user.id).all()
    notMineFormsList = []
    for form in allFormsThatArentMine:
        formDict = {'id': form.to_dict()['id'],
                    'JSX': form.to_dict()['JSX']
                    }
        notMineFormsList.append(formDict)
    return {'notMyForms': notMineFormsList}


@form_routes.route('/<id>', methods=['DELETE'])
@login_required
def delete(id):
    deletedForm = Form.query.filter(Form.id == id).first()
    db.session.delete(deletedForm)
    db.session.commit()
    return {'': ''}
