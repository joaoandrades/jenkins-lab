pipeline {
    agent any

    stages {
        stage ('Build image') {
            steps {
                script{
                    dockerapp = docker.build("jonnyff/nodejenkins", '-f ./src/dockerfile ./src')
                }
            }
        }
    }
}