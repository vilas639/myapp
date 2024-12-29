pipeline {
    agent any

    stages {
        stage('Git clone') {
            steps {
               git branch: 'prod', url: 'https://github.com/vilas639/myapp.git'
            }
        }

        stage('Docker Image'){
            steps{
                sh 'docker build -t vilasjdhv639/myapp_ui_app .'
            }
        }

       stage('Docker Image push'){
            steps{

             sh "docker login -u vilasjdhv639 -p Vilas@123"
             sh "docker push vilasjdhv639/contact_ui_app:v1"

             echo "Docker Image push"
            }
        }

         stage('k8s deployment'){
            steps{
            // sh 'kubectl apply -f contact_ui_deployment.yaml'
            //sh 'kubectl apply -f create contact_ui_service.yml'
             echo "k8s deployment"
            }
        }


    }
}
