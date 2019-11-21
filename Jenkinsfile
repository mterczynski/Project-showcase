pipeline {
    agent any

    stages {
        stage('Deploy') {
            steps {
                sh '''
                    ssh -tt root@mterczynski.pl << 'ENDSSH'
                    cd /var/www/html
                    ls
                    ENDSSH
                '''
            }
        }
    }
}