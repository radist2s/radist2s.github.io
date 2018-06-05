#!/bin/sh

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
WP_UPLOADS_LOCAL_DIR="$SCRIPT_DIR/../../../uploads"
WP_PLUGINS_LOCAL_DIR="$SCRIPT_DIR/../../../plugins"
WP_CONTENT_REMOTE_DIR="/REMOTE_DIR/public_html/wp-content"

if [ -e $SCRIPT_DIR/rsyncjob.lock ]
then
  echo "Rsync job already running...exiting"
  exit
fi

touch $SCRIPT_DIR/rsyncjob.lock

export RSYNC_RSH="ssh -c arcfour -o Compression=no -x"

SSH_LOGIN=loginuser@servername.com
CHOWN_USER=chownuser
CHOWN_GROUP=chowngroup

#TEST=-nvi

rsync $TEST -zaP $WP_UPLOADS_LOCAL_DIR $SSH_LOGIN:$WP_CONTENT_REMOTE_DIR # >> /tmp/sync-log.log
rsync $TEST -zaP $WP_PLUGINS_LOCAL_DIR $SSH_LOGIN:$WP_CONTENT_REMOTE_DIR # >> /tmp/sync-log.log
ssh -tt $SSH_LOGIN "chown -R $CHOWN_USER:$CHOWN_GROUP $WP_CONTENT_REMOTE_DIR"

rm $SCRIPT_DIR/rsyncjob.lock
