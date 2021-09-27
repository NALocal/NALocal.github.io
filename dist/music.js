const ap = new APlayer({
    container: document.getElementById('aplayer'),
	fixed: true,
	mini: true,
    autoplay: true,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: 'music',
            artist: '星茶会',
            url: 'https://lc-gluttony.s3.amazonaws.com/EbnOjkCxn25E/7RIBkxSDDha5vOfJt3MMLAqnpwbQqdCN/%E6%98%9F%E8%8C%B6%E4%BC%9A%E3%83%94%E3%82%A2%E3%83%8E60%E5%88%86%E8%80%90%E4%B9%85%E4%BD%9C%E6%A5%AD%E7%94%A8BGM%E3%80%90Pianist%20Chinatsuko%E3%80%91.mp3',
            cover: 'https://i.imgur.com/2RnpRBL.png',
        }
    ]
});