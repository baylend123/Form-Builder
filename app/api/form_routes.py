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
        formsList.append(form.to_dict()['JSX'])

    print(formsList)
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
