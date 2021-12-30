
$(document).ready(function(){
    const abi = [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "approved",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "ApprovalForAll",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_point",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "create",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "_data",
                    "type": "bytes"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "find",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "getApproved",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                }
            ],
            "name": "isApprovedForAll",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "ownerOf",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "interfaceId",
                    "type": "bytes4"
                }
            ],
            "name": "supportsInterface",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "tokenURI",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
    const addressSM = '0x6EB8da7545c921fBaf671405674d2706067BcfF2';

    var addressIndex = "";
    var hashTran = "";

    // setup layout
    $('#dBlock').hide();
    $('#dObject').hide();
    
    const web3 = new Web3(window.ethereum);
    window.ethereum.enable();
    // Tao contract cho MetaMask
    var contract_MM = web3.eth.Contract(abi,addressSM);
    console.log(contract_MM);
    checkMM();
    $('#btnConnectMM').click(function(){
        connectMM().then((data)=>{
           addressIndex = data[0];
           console.log(addressIndex);
           document.getElementById('sWallet').innerHTML = addressIndex;
        }).catch((err)=>{
            console.log('Connect MM failer!');
        });
    });

    $('#btnBlock').click(function(){
        if (addressIndex.length == 0){
           alert('Chưa kết nối MM');
        } else {
            web3.eth.getTransactionReceipt(hashTran)
            .then(result=>{
                console.log(result);
                $('#dBlock').show();
                document.getElementById('sBH').innerHTML = result.blockHash;
                document.getElementById('sBN').innerHTML = result.blockNumber;
                document.getElementById('sGU').innerHTML = result.gasUsed;
                document.getElementById('sTH').innerHTML = result.transactionHash;
                document.getElementById('sTI').innerHTML = result.transactionIndex;
                document.getElementById('sF').innerHTML = result.from;
                document.getElementById('sT').innerHTML = result.to;
            });
        }

    });
    // Init Bid
    $('#btnSend').click(function(){
        if (addressIndex.length == 0){
           alert('Chưa kết nối MM');
        } else {
        contract_MM.methods.create($('#txtName').val(),$('#txtPoint').val(),$('#txtMSSV').val()).send({from:addressIndex})
        .on('transactionHash', function(hash){
            console.log("hash:",hash);
            $.post('./create',{
                               name:$('#txtName').val(),
                               mssv:$('#txtMSSV').val(),
                               point:$('#txtPoint').val(),
                               hash:hash,
                         },function(value){
                            if(value.err==0){
                                alert("Tạo thành công");
                            }
                         });
        })
        .on('error', function(error, receipt) {
            console.log("error:",error);
        });   
        }
    });
    $('#btnFind').click(function(){
        if (addressIndex.length == 0){
           alert('Chưa kết nối MM');
        } else {
        contract_MM.methods.find($('#txtFind').val()).call({from:addressIndex}).then(function(value){
            console.log(value);
            $.get(`./token/${$('#txtFind').val()}`).then(function(data){
                console.log(data);
                if (data.err>0){
                    alert("Dữ liệu của bạn đã bị xóa");
                    return;
                }
                hashTran = data.data.hash;
                if(data.data.name != value[0] || data.data.point != value[1]){
                    alert("Dữ liệu đã bị sửa đổi, chúng tôi sẽ cập nhật lại cho bạn");
                $.post('./update',{
                        name:value[0].toString(),
                        point:value[1].toString(),
                        mssv:$('#txtFind').val()
                    },function(json){
                        if (json.err==0){
                            alert("Cập nhật thành công");
                            $('#dObject').show();
                            document.getElementById('sName').innerHTML = value[0];
                            document.getElementById('sPoint').innerHTML = value[1];
                            document.getElementById('sMSSV').innerHTML = $('#txtFind').val();
                            return;
                        }
                    });
                } else {
                    $('#dObject').show();
                    document.getElementById('sName').innerHTML = value[0];
                    document.getElementById('sPoint').innerHTML = value[1];
                    document.getElementById('sMSSV').innerHTML = $('#txtFind').val();
                }
               
            });
            
        }).catch(function(err){
            console.log("Chưa có người này");
        });
        }
    });

    $('#btnPlay').click(function(){
        if (addressIndex.length == 0){
           alert('Chưa kết nối MM');
        } else {
            console.log(addressIndex);
            contract_MM.methods.play().send({from:addressIndex});
        }
    });

    $('#btnEnd').click(function(){
        if (addressIndex.length == 0){
           alert('Chưa kết nối MM');
        } else {
            contract_MM.methods.end().send({from:addressIndex});
        }
    });
    $('#btnList').click(async function(){
        if (addressIndex.length == 0){
           alert('Chưa kết nối MM');
        } else {
          $.get('./bid',function(data){
                    if(data){
                        if(data.err>0){
                            document.getElementById('ulList').innerHTML = '<h6>Danh sách rỗng</h6>';
                            return;
                        }
                        var inner = '';
                        data.data.forEach(element => {
                            inner += `<li>${element.address}</li>`;
                        });
                        document.getElementById('ulList').innerHTML = inner;
                    }
                });
        }
    });
    $('#btnDauThau').click(function(){
        if (addressIndex.length == 0){
           alert('Chưa kết nối MM');
        } else {
            var P = parseFloat($('#txtI').val()) +  parseFloat($('#txtE').val());
            var IS = parseFloat($('#txtEC').val()) +  parseFloat($('#txtP').val());
            var CS = parseFloat($('#txtBR').val()) +  parseFloat($('#txtIW').val())+  parseFloat($('#txtID').val());
        contract_MM.methods.auction($('#txtAddress').val(),$('#txtPA').val(),$('#txtLF').val(),$('#txtBW').val(),P,IS,CS).send({from:addressIndex});    
        }
    });
});

async function connectMM(){
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    return accounts;
}

function checkMM(){
    if (typeof window.ethereum !== 'undefined') {
        alert('MetaMask is installed!');
      } else {
          alert('MM isn\'t installed!');
      }
}
