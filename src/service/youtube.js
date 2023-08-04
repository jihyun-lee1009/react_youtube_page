class Youtube {
    constructor(key) {
        this.key = key;
        this.getRequestOption = {
            method: 'GET',
            redirect: 'follow',
        };
    }

    mostPopular() {
        return fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyDyRFCYzWvFVbV7sGH3swtaJgMiUwnWiKc&part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
            this.getRequestOptions
        )
            .then(response => response.json())
            .then(result => result.items);
    }

    search(query) {
        return fetch(
            `https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyDyRFCYzWvFVbV7sGH3swtaJgMiUwnWiKc&part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
            this.getRequestOptions
        )
            .then(response => response.json())
            .then(result =>
                result.items.map(item => ({ ...item, id: item.id.videoId }))
            );
    }
}

export default Youtube;