pipeline {
    agent any

    stages {
        stage('Deploy') {
            steps {
                sshagent(credentials: ['8449ad56-aa8e-4f9a-8bab-22b66e688c1a']) {
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