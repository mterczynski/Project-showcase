pipeline {
    agent any

    stages {
        stage('Deploy') {
            steps {
                shell "ssh root@mterczynski.pl <<'ENDSSH'
                    cd /var/www/html
                    ls
                    ENDSSH
                "
            }
        }
    }
}