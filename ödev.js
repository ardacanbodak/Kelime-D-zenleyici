function transformText() {
    // Input alanındaki metni al
    let inputText = document.getElementById("sentenceInput").value;

    // Metni kelimelere ayır ve her kelimenin ilk harfini büyüt, geri kalanını küçük yap
    let transformedText = inputText.split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');

    // Çevrilen metni p etiketi içinde göster
    document.getElementById("output").textContent = transformedText;
}