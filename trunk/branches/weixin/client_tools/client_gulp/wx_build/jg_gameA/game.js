
            
                        var loadLibsTask = qq.loadSubpackage({
                            name: 'libs',
                            success: function(res) {
                                if (res && res.errMsg == "loadSubpackage:ok") {
                                } else {
                                }
                                window.loadSubpackages();
                            },
                            fail: function(res) {
                                console.error(res);
                            },
                        });
                        loadLibsTask && loadLibsTask.onProgressUpdate(res => {
                        });
