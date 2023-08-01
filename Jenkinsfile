pipeline {
    agent any
    stages {
        stage('Compile') {
          steps {
                slackSend channel: "outros-assuntos", message: "Build deployed start - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
                catchError {
                  echo "teste" asdasdads 
                }
            }
          post {
            failure {
                slackSend channel: "outros-assuntos", failOnError: true, message: "Build Started: ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
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
            slackSend channel: "outros-assuntos", failOnError: true, message: "Build Started: ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
        }
    }
}