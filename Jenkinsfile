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
                container(''){  
                    echo "in container"
                    sh '''
                    ls
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