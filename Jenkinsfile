pipeline {
    agent any

    stages {
        stage('Deploy') {
            steps {
                sshagent(credentials: ['jenkins-global-key-digital-ocean']) {
                     sh '''
                        realpath .
                        cd ~/.ssh
                        realpath .
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