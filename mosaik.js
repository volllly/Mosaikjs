function mosaik(_param) {
    if(!("selector" in _param)) {
        _param["selector"] = "mosaik";
    }
    var mosaiks = document.querySelectorAll("." + _param["selector"]);
    for(var i = 0; i < mosaiks.length; i++) {
        set_mosaik(mosaiks[i]);
    }

    function set_mosaik(_mosaik) {
        var text = _mosaik.textContent;
        _mosaik.innerHTML = "";
        for(var i = 1; i <= 9; i++) {
            var div = document.createElement("div");
            div.className = "_" + i;
            var wrapper = document.createElement("div");
            wrapper.className = "innerRatio";
            wrapper.appendChild(div);
            _mosaik.appendChild(wrapper);
        }

        var dominos = [];
        dominos[0] = alphabet[text.substring(0, 1).toLowerCase()];
        dominos[1] = alphabet[text.substring(1, 2).toLowerCase()];
        
        dominos[0].used = Math.floor((Math.random() * dominos[0].length));
        dominos[1].used = Math.floor((Math.random() * dominos[1].length));

        var dominant = Math.floor((Math.random() * 2));  
        var undominant = 0;
        if(dominant == 0) {
            undominant = 1;
        }

        var show = Math.floor((Math.random() * 2)); 
        var dontshow = 0;
        if(show == 0) {
            dontshow = 1;
        }

        if(undominant == 1) {
            if(!dominos[undominant][dominos[undominant].used].submissive) {
                dominant = 1;
                undominant = 0;
                if(!dominos[undominant][dominos[undominant].used].submissive) {
                    dominant = 0;
                    undominant = 1;
                }
            }
        } else {
            if(!dominos[undominant][dominos[undominant].used].submissive) {
                dominant = 0;
                undominant = 1;
                if(!dominos[undominant][dominos[undominant].used].submissive) {
                    dominant = 1;
                    undominant = 0;
                }
            }
        }

        if((dominos[undominant][dominos[undominant].used].side.left)||(dominos[undominant][dominos[undominant].used].side.right)) {
            if(show == 0) {
                if(!dominos[undominant][dominos[undominant].used].side.left) {
                    dontshow = 0;
                    show = 1
                }
            } else {
                if(!dominos[undominant][dominos[undominant].used].side.right) {
                    dontshow = 1;
                    show = 0
                }
            }
        }

        var moveH = [0, 0];
        moveH[0] = Math.floor((Math.random() * 2)) * dominos[0][dominos[0].used].movement.h * undominant;
        moveH[1] = Math.floor((Math.random() * 2)) * dominos[1][dominos[1].used].movement.h * dominant;

        moveV = [0, 0];
        moveV[0] = Math.floor((Math.random() * 2)) * dominos[0][dominos[0].used].movement.v * 2;
        moveV[1] = Math.floor((Math.random() * 2)) * dominos[1][dominos[1].used].movement.v * 2;

        var showtemp = 0;
        if(undominant == 0) {
            showtemp = show;
        }
        
        _mosaik.querySelector("._1").className += " q" + dominos[0][dominos[0].used].domino[(0 + moveV[0])%3][0 + (showtemp + moveH[0])%2];
        _mosaik.querySelector("._4").className += " q" + dominos[0][dominos[0].used].domino[(1 + moveV[0])%3][0 + (showtemp + moveH[0])%2];
        _mosaik.querySelector("._7").className += " q" + dominos[0][dominos[0].used].domino[(2 + moveV[0])%3][0 + (showtemp + moveH[0])%2];


        _mosaik.querySelector("._2").className += " q" + dominos[dominant][dominos[dominant].used].domino[(0 + moveV[dominant])%3][0 + (undominant + moveH[dominant])%2];
        _mosaik.querySelector("._5").className += " q" + dominos[dominant][dominos[dominant].used].domino[(1 + moveV[dominant])%3][0 + (undominant + moveH[dominant])%2];
        _mosaik.querySelector("._8").className += " q" + dominos[dominant][dominos[dominant].used].domino[(2 + moveV[dominant])%3][0 + (undominant + moveH[dominant])%2];

        showtemp = 0;
        if(dominant == 0) {
            showtemp = show;
        }

        _mosaik.querySelector("._3").className += " q" + dominos[1][dominos[1].used].domino[(0 + moveV[1])%3][(dominant + showtemp + moveH[1])%2];
        _mosaik.querySelector("._6").className += " q" + dominos[1][dominos[1].used].domino[(1 + moveV[1])%3][(dominant + showtemp + moveH[1])%2];
        _mosaik.querySelector("._9").className += " q" + dominos[1][dominos[1].used].domino[(2 + moveV[1])%3][(dominant + showtemp + moveH[1])%2];
    }

}

var alphabet = {
    "a": [
        {
            "domino": [
                [2, 1],
                [0, 0],
                [2, 1]
            ],
            "submissive": false,
            "movement": {
                "h": 0,
                "v": 0
            },
            "side": {
                "left": false,
                "right": false
            }
        },
        {
            "domino": [
                [2, 1],
                [2, 1],
                [3, 4]
            ],
            "submissive": false,
            "movement": {
                "h": 0,
                "v": 0
            },
            "side": {
                "left": false,
                "right": false
            }
        }
    ],
    "b": [
        {
            "domino": [
                [1, 0],
                [4, 0],
                [1, 0]
            ],
            "submissive": true,
            "movement": {
                "h": 1,
                "v": 0
            },
            "side": {
                "left": true,
                "right": false
            }
        },
        {
            "domino": [
                [1, 0],
                [1, 0],
                [4, 0]
            ],
            "submissive": true,
            "movement": {
                "h": 1,
                "v": 0
            },
            "side": {
                "left": true,
                "right": false
            }
        }
    ],
    "c": [
        {
            "domino": [
                [2, 0],
                [3, 0],
                [0, 0]
            ],
            "submissive": true,
            "movement": {
                "h": 1,
                "v": 1
            },
            "side": {
                "left": true,
                "right": false
            }
        }
    ],
    "d": [
        {
            "domino": [
                [1, 0],
                [4, 0],
                [0, 0]
            ],
            "submissive": true,
            "movement": {
                "h": 1,
                "v": 1
            },
            "side": {
                "left": true,
                "right": false
            }
        }
    ],
    "e": [
        {
            "domino": [
                [1, 0],
                [1, 0],
                [1, 0]
            ],
            "submissive": true,
            "movement": {
                "h": 1,
                "v": 0
            },
            "side": {
                "left": true,
                "right": false
            }
        },
        {
            "domino": [
                [4, 0],
                [4, 0],
                [4, 0]
            ],
            "submissive": true,
            "movement": {
                "h": 1,
                "v": 0
            },
            "side": {
                "left": true,
                "right": false
            }
        },
        {
            "domino": [
                [4, 0],
                [1, 0],
                [1, 0]
            ],
            "submissive": true,
            "movement": {
                "h": 1,
                "v": 0
            },
            "side": {
                "left": true,
                "right": false
            }
        },
        {
            "domino": [
                [4, 0],
                [4, 0],
                [1, 0]
            ],
            "submissive": true,
            "movement": {
                "h": 1,
                "v": 0
            },
            "side": {
                "left": true,
                "right": false
            }
        }
    ],
    "f": [
        {
            "domino": [
                [1, 0],
                [1, 0],
                [0, 0]
            ],
            "submissive": true,
            "movement": {
                "h": 1,
                "v": 0
            },
            "side": {
                "left": true,
                "right": false
            }
        },
        {
            "domino": [
                [4, 0],
                [4, 0],
                [0, 0]
            ],
            "submissive": true,
            "movement": {
                "h": 1,
                "v": 0
            },
            "side": {
                "left": true,
                "right": false
            }
        },
        {
            "domino": [
                [0, 1],
                [0, 1],
                [3, 0]
            ],
            "submissive": true,
            "movement": {
                "h": 0,
                "v": 0
            },
            "side": {
                "left": false,
                "right": true
            }
        },
        {
            "domino": [
                [0, 4],
                [0, 4],
                [3, 0]
            ],
            "submissive": true,
            "movement": {
                "h": 0,
                "v": 0
            },
            "side": {
                "left": false,
                "right": true
            }
        },
        {
            "domino": [
                [0, 1],
                [0, 1],
                [2, 0]
            ],
            "submissive": true,
            "movement": {
                "h": 0,
                "v": 0
            },
            "side": {
                "left": false,
                "right": true
            }
        },
        {
            "domino": [
                [0, 4],
                [0, 4],
                [2, 0]
            ],
            "submissive": true,
            "movement": {
                "h": 0,
                "v": 0
            },
            "side": {
                "left": false,
                "right": true
            }
        }
    ],
    "g": [
        {
            "domino": [
                [2, 1],
                [3, 4],
                [3, 0]
            ],
            "submissive": true,
            "movement": {
                "h": 0,
                "v": 0
            },
            "side": {
                "left": true,
                "right": false
            }
        },
        {
            "domino": [
                [2, 1],
                [3, 4],
                [3, 1]
            ],
            "submissive": true,
            "movement": {
                "h": 0,
                "v": 0
            },
            "side": {
                "left": true,
                "right": false
            }
        },
        {
            "domino": [
                [2, 1],
                [3, 4],
                [3, 4]
            ],
            "submissive": true,
            "movement": {
                "h": 0,
                "v": 0
            },
            "side": {
                "left": true,
                "right": false
            }
        }
    ],
    "h": [
        {
            "domino": [
                [1, 2],
                [4, 3],
                [0, 0]
            ],
            "submissive": false,
            "movement": {
                "h": 0,
                "v": 1
            },
            "side": {
                "left": false,
                "right": false
            }
        },
        {
            "domino": [
                [1, 2],
                [0, 0],
                [4, 3]
            ],
            "submissive": false,
            "movement": {
                "h": 0,
                "v": 0
            },
            "side": {
                "left": false,
                "right": false
            }
        }
    ],
    "i": [
        {
            "domino": [
                [4, 0],
                [1, 0],
                [0, 0]
            ],
            "submissive": true,
            "movement": {
                "h": 1,
                "v": 1
            },
            "side": {
                "left": true,
                "right": false
            }
        },
        {
            "domino": [
                [3, 0],
                [2, 0],
                [0, 0]
            ],
            "submissive": true,
            "movement": {
                "h": 1,
                "v": 1
            },
            "side": {
                "left": true,
                "right": false
            }
        },
        {
            "domino": [
                [2, 0],
                [1, 0],
                [0, 0]
            ],
            "submissive": true,
            "movement": {
                "h": 1,
                "v": 1
            },
            "side": {
                "left": true,
                "right": false
            }
        },
        {
            "domino": [
                [4, 0],
                [3, 0],
                [0, 0]
            ],
            "submissive": true,
            "movement": {
                "h": 1,
                "v": 1
            },
            "side": {
                "left": true,
                "right": false
            }
        },
        {
            "domino": [
                [1, 0],
                [1, 0],
                [4, 0]
            ],
            "submissive": true,
            "movement": {
                "h": 1,
                "v": 0
            },
            "side": {
                "left": true,
                "right": false
            }
        },
        {
            "domino": [
                [2, 0],
                [2, 0],
                [3, 0]
            ],
            "submissive": true,
            "movement": {
                "h": 1,
                "v": 0
            },
            "side": {
                "left": true,
                "right": false
            }
        },
        {
            "domino": [
                [2, 0],
                [1, 0],
                [4, 0]
            ],
            "submissive": true,
            "movement": {
                "h": 1,
                "v": 0
            },
            "side": {
                "left": true,
                "right": false
            }
        },
        {
            "domino": [
                [1, 0],
                [2, 0],
                [3, 0]
            ],
            "submissive": true,
            "movement": {
                "h": 1,
                "v": 0
            },
            "side": {
                "left": true,
                "right": false
            }
        }
    ],
    "j": [
        {
            "domino": [
                [2, 0],
                [3, 0],
                [3, 0]
            ],
            "submissive": true,
            "movement": {
                "h": 1,
                "v": 0
            },
            "side": {
                "left": true,
                "right": false
            }
        },
        {
            "domino": [
                [0, 2],
                [0, 3],
                [3, 0]
            ],
            "submissive": false,
            "movement": {
                "h": 0,
                "v": 0
            },
            "side": {
                "left": true,
                "right": false
            }
        },
        {
            "domino": [
                [0, 1],
                [0, 4],
                [3, 0]
            ],
            "submissive": false,
            "movement": {
                "h": 0,
                "v": 0
            },
            "side": {
                "left": true,
                "right": false
            }
        }
    ],
    "k": [
        {
            "domino": [
                [2, 4],
                [3, 1],
                [0, 0]
            ],
            "submissive": false,
            "movement": {
                "h": 0,
                "v": 1
            },
            "side": {
                "left": false,
                "right": true
            }
        },
        {
            "domino": [
                [2, 4],
                [0, 0],
                [3, 1]
            ],
            "submissive": false,
            "movement": {
                "h": 0,
                "v": 0
            },
            "side": {
                "left": false,
                "right": true
            }
        },
        {
            "domino": [
                [4, 0],
                [0, 0],
                [1, 0]
            ],
            "submissive": true,
            "movement": {
                "h": 1,
                "v": 0
            },
            "side": {
                "left": true,
                "right": false
            }
        },
        {
            "domino": [
                [4, 0],
                [1, 0],
                [0, 0]
            ],
            "submissive": true,
            "movement": {
                "h": 1,
                "v": 1
            },
            "side": {
                "left": true,
                "right": false
            }
        }
    ],
    "l": [
        {
            "domino": [
                [1, 0],
                [4, 0],
                [4, 0]
            ],
            "submissive": true,
            "movement": {
                "h": 1,
                "v": 0
            },
            "side": {
                "left": true,
                "right": false
            }
        },
        {
            "domino": [
                [1, 0],
                [4, 0],
                [0, 4]
            ],
            "submissive": false,
            "movement": {
                "h": 0,
                "v": 0
            },
            "side": {
                "left": true,
                "right": false
            }
        },
        {
            "domino": [
                [2, 0],
                [3, 0],
                [0, 4]
            ],
            "submissive": false,
            "movement": {
                "h": 0,
                "v": 0
            },
            "side": {
                "left": true,
                "right": false
            }
        }
    ],
    "m": [
        {
            "domino": [
                [1, 1],
                [0, 0],
                [0, 0]
            ],
            "submissive": false,
            "movement": {
                "h": 0,
                "v": 1
            },
            "side": {
                "left": true,
                "right": false
            }
        },
        {
            "domino": [
                [1, 1],
                [4, 3],
                [0, 0]
            ],
            "submissive": false,
            "movement": {
                "h": 0,
                "v": 1
            },
            "side": {
                "left": true,
                "right": false
            }
        }
    ],
    "n": [
        {
            "domino": [
                [1, 0],
                [0, 0],
                [0, 0]
            ],
            "submissive": true,
            "movement": {
                "h": 1,
                "v": 1
            },
            "side": {
                "left": true,
                "right": false
            }
        },
        {
            "domino": [
                [0, 0],
                [1, 0],
                [0, 0]
            ],
            "submissive": true,
            "movement": {
                "h": 1,
                "v": 1
            },
            "side": {
                "left": true,
                "right": false
            }
        },
        {
            "domino": [
                [1, 2],
                [3, 3],
                [0, 0]
            ],
            "submissive": false,
            "movement": {
                "h": 0,
                "v": 1
            },
            "side": {
                "left": true,
                "right": false
            }
        }
    ],
    "o": [
        {
            "domino": [
                [2, 1],
                [3, 4],
                [0, 0]
            ],
            "submissive": false,
            "movement": {
                "h": 0,
                "v": 1
            },
            "side": {
                "left": true,
                "right": false
            }
        }
    ],
    "p": [
        {
            "domino": [
                [2, 1],
                [3, 4],
                [4, 0]
            ],
            "submissive": false,
            "movement": {
                "h": 0,
                "v": 0
            },
            "side": {
                "left": false,
                "right": true
            }
        },
        {
            "domino": [
                [0, 1],
                [0, 4],
                [3, 0]
            ],
            "submissive": true,
            "movement": {
                "h": 0,
                "v": 0
            },
            "side": {
                "left": false,
                "right": true
            }
        },
        {
            "domino": [
                [1, 0],
                [4, 0],
                [3, 0]
            ],
            "submissive": true,
            "movement": {
                "h": 1,
                "v": 0
            },
            "side": {
                "left": true,
                "right": false
            }
        },
        {
            "domino": [
                [1, 0],
                [1, 0],
                [4, 0]
            ],
            "submissive": true,
            "movement": {
                "h": 1,
                "v": 0
            },
            "side": {
                "left": true,
                "right": false
            }
        }
    ],
    "q": [
        {
            "domino": [
                [2, 1],
                [3, 4],
                [0, 4]
            ],
            "submissive": true,
            "movement": {
                "h": 0,
                "v": 0
            },
            "side": {
                "left": true,
                "right": false
            }
        }
    ],
    "r": [
        {
            "domino": [
                [1, 0],
                [0, 0],
                [0, 0]
            ],
            "submissive": true,
            "movement": {
                "h": 1,
                "v": 1
            },
            "side": {
                "left": true,
                "right": false
            }
        },
        {
            "domino": [
                [0, 0],
                [0, 0],
                [1, 0]
            ],
            "submissive": true,
            "movement": {
                "h": 0,
                "v": 1
            },
            "side": {
                "left": true,
                "right": false
            }
        },
        {
            "domino": [
                [2, 1],
                [3, 4],
                [1, 1]
            ],
            "submissive": false,
            "movement": {
                "h": 1,
                "v": 1
            },
            "side": {
                "left": false,
                "right": true
            }
        }
    ],
    "s": [
        {
            "domino": [
                [2, 1],
                [3, 1],
                [3, 4]
            ],
            "submissive": true,
            "movement": {
                "h": 0,
                "v": 0
            },
            "side": {
                "left": true,
                "right": true
            }
        },
        {
            "domino": [
                [2, 4],
                [3, 1],
                [2, 4]
            ],
            "submissive": true,
            "movement": {
                "h": 0,
                "v": 0
            },
            "side": {
                "left": true,
                "right": true
            }
        },
        {
            "domino": [
                [2, 4],
                [3, 1],
                [3, 4]
            ],
            "submissive": true,
            "movement": {
                "h": 0,
                "v": 0
            },
            "side": {
                "left": true,
                "right": true
            }
        },
        {
            "domino": [
                [2, 1],
                [3, 1],
                [2, 4]
            ],
            "submissive": true,
            "movement": {
                "h": 0,
                "v": 0
            },
            "side": {
                "left": true,
                "right": true
            }
        }
    ],
    " ": [
        {
            "domino": [
                [0, 0],
                [0, 0],
                [0, 0]
            ],
            "submissive": true,
            "movement": {
                "h": 0,
                "v": 0
            },
            "side": {
                "left": true,
                "right": true
            }
        }
    ]
};