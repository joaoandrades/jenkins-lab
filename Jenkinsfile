pipeline {
    agent any
    stages {
        stage('Compile') {
          steps {
              script{
                sh "echo 'falha' asasd"
                }
            }
        }
        /* ... other stages ... */
    }
    post {
        success {
            slackSend channel: "teste-jenkins", message: "Build deployed successfully - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
        }
        failure {
            slackSend channel: "teste-jenkins", message: "Build failed: ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
        }
    }
}
