pipeline {
    agent any
    stages {
        stage('Compile') {
           steps {
                echo "teste"
            }
        }
        /* ... other stages ... */
    }
    post {
        success {
            slackSend message: "Build deployed successfully - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
        }
        failure {
            slackSend failOnError: true, message: "Build Started: ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
        }
    }
}