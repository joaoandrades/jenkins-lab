pipeline {
    agent any
    stages {
        stage('Compile') {
          steps {
              script{
                sh "echo "teste" asasd"
                }
            }
        }
        /* ... other stages ... */
    }
    post {
        success {
            slackSend channel: "outros-assuntos", message: "Build deployed successfully - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
        }
        failure {
            slackSend channel: "outros-assuntos", message: "Build failed: ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
        }
    }
}