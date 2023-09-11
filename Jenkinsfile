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
                    which python
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