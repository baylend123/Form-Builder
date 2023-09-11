pipeline {
    agent{
            node{
                label "kube-python-node-agent"
            }
    }
    triggers{
            pollSCM '*/5 * * * *'
        }
    stages {
        stage("Build"){
            steps {
                container('kube-python-node-agent'){  
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