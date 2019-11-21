pipeline {
    agent any

    stages {
        stage('Deploy') {
            steps {
                sshagent(credentials: ['jenkins-global-key-digital-ocean']) {
                     sh '''
                        realpath .
                        scp -r assets root@mterczynski.pl:/var/www/html/assets
                        scp -r index.html root@mterczynski.pl:/var/www/html/index.html
                    '''
                }
            }
        }
    }
}