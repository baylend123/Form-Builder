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
                    echo "Before install"
                    sh '''
                    ls in container
                    '''
                    echo "after install"
                }
                sh '''
                ls in workpace
                '''
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