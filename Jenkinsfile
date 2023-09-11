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
                echo "Building"
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
                pip install pipenv
                '''
            }
        }
    }
}