pipeline {
    agent any

    stages {
        stage('Deploy') {
            steps {
                sshagent(credentials: ['jenkins-digital-ocean']) {
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
}