pipeline {
    agent{
            kubernetes {
                yaml '''
                    apiVersion: v1
                    kind: Pod
                    spec:
                      containers:
                      - name: app
                        image: baylend123/formbuilder
                    '''
                }
    }
    triggers{
            pollSCM '*/5 * * * *'
        }
    stages {
        stage("Build"){
            steps {
                container('app'){  
                    echo "in container"
                    sh '''
                    pipenv install --system --deploy --ignore-pipfile
                    flask run
                    '''
                }
                echo "ouside container"
            }
        }
        stage("Test"){
            steps {
                echo "Testing"
            }
        }
        stage("Deliver"){
            steps {
                echo "Delivering"
                sh '''
           
                '''
            }
        }
    }
}