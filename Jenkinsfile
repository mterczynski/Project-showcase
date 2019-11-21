pipeline {
    agent any

    stages {
        stage('Deploy') {
            steps {
                sh '''
                    ssh root@mterczynski.pl << 'ENDSSH'
                    cd /var/www/html
                    ls
                    ENDSSH
                '''
            }
        }
    }
}