// 外部TeXファイルを読み込む。
document.addEventListener('DOMContentLoaded', function() {
  // あらかじめ、外部ファイルにて変数Mytexfilesを設定しておくこと
  var mto = Mytexfiles;
  const num_start = mto.num_start;
  const num_end = mto.num_end;
  const tex_root_url = mto.tex_root_url;

  for (let idx = num_start; idx < num_end + 1; idx++) {
    var idx_str = ('000' + idx).slice(-3);
    var md_id = '#' + mto.mondai.baseid + '-' + idx_str;
    var kt_id = '#' + mto.kaitou.baseid + '-' + idx_str;
    var ks_id = '#' + mto.kaisetu.baseid + '-' + idx_str;
    
    var md_url = tex_root_url + mto.mondai.src_baseurl + '/' + mto.mondai.basefilename + '-' + idx_str + '.' + mto.file_ext;
    var kt_url = tex_root_url + mto.kaitou.src_baseurl + '/' + mto.kaitou.basefilename + '-' + idx_str + '.' + mto.file_ext;
    var ks_url = tex_root_url + mto.kaisetu.src_baseurl + '/' + mto.kaisetu.basefilename + '-' + idx_str + '.' + mto.file_ext;

    // Inputs
    var inputs = [
      {id: md_id, url: md_url},
      {id: kt_id, url: kt_url},
      {id: ks_id, url: ks_url},
    ];    

    for (let idx = 0; idx < inputs.length; idx++) {
      let target_id = inputs[idx].id;
      let target_url = inputs[idx].url;
  
      // // $(target_id).load(target_url, function(data, status) {
      // document.querySelector(target_id).onload(target_url, function(data, status) {
      //     if (status == 'success') {
      //   }
      //   else if (status == 'error') {
      //     console.log('Failed to read a TeX file. (id: ' + target_id + ')');
      //     document.querySelector(target_id).html('Failed to read the file. (id: ' + target_id + ')');
      //     // $(target_id).html('Failed to read the file. (id: ' + target_id + ')');
      //   }
      //   else {
      //     console.log('Unexpected result occurred. (id: ' + target_id + ')');
      //   }
      // });
      fetch(target_url)
      .then(data => data.text())
      .then(html => document.querySelector(target_id).innerHTML = html)
      .then(() => {
        // ロード後の処理を記述
        renderMathInElement(document.querySelector(target_id), {
          // customised options
          // • auto-render specific keys, e.g.:
          delimiters: MyKatexConfig.delimiters,
          // macro
          macros: MyKatexConfig.macros,
          // • rendering keys, e.g.:
          throwOnError : false
        });
    });

    }
  }
});
