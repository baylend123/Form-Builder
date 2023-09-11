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
                sh ```
                ls
                ```
            }
        }
        stage("Deliver"){
            steps {
                echo "Delivering"
            }
        }
    }
}