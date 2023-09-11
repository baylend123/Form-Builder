pipeline {
    agent{
        node{
            label "kube-python-node-agent"
        }
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
            }
        }
    }
}