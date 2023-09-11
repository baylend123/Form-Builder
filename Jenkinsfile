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
                    echo "Building"
                    sh '''
                    '''
                }
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