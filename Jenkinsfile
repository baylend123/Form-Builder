pipeline {
    agent{
            docker { image 'nikolaik/python-nodejs' }   
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