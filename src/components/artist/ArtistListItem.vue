<template>
    <article class="card border-0 col-lg-4 col-md-6 col-sm-12">
        <div class="card-body">
            <router-link :to="{name: 'ArtistView', params:  {
            id: artist.artistId}}">
                <img class="artist-image card-img-top" :src="`https://localhost:5001/images/artist_images/${artist.image}`">
                <h3>{{artist.artistName}}</h3>
            </router-link>
            <div class="flex-row d-flex">
                <!--Like and dislike buttons-->
                <!--Classes is assigned to provide colors if a button have been clicked-->
                <div class="flex-fill">
                    <i
                        class="fas fa-thumbs-up"
                        :class="{ 'text-success' : getVoteObj().alreadyUpVoted}"
                        @click="upVoteArtist"
                    />
                    <p>{{ artist.upVote }}</p>
                </div>
                <div class="flex-fill">
                    <i 
                        class="fas fa-thumbs-down"                
                        :class="{ 'text-danger' : getVoteObj().alreadyDownVoted}"
                        @click="downVoteArtist"
                    />
                    <p>{{ artist.downVote }}</p>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    props: {
        artist: {
            type: Object
        },
        updateArtist: {
            type: Function
        }
    },
    methods: {
        /*Saving upvote, downvote and artist id in local storage. That way we can prevent a user 
        from giving two likes to the same artist*/

        upVoteArtist() {
            let artistObj = this.artist;
            let voteObj = this.getVoteObj();

            /*
            Checking if artist is already liked,
            in that case the like is removed
            */
            switch(voteObj.alreadyUpVoted) {
                case false:
                    artistObj.upVote++;
                    voteObj.alreadyUpVoted = true;
                    //Removing existing dislike
                    if(voteObj.alreadyDownVoted){
                        artistObj.downVote--;
                        voteObj.alreadyDownVoted = false;
                    }
                    break;
                case true:
                    artistObj.upVote--;
                    voteObj.alreadyUpVoted = false;
                    break;
                default:
                    console.log(voteObj.alreadyUpVoted);
            }            
            
            this.setVoteObj(voteObj);
            this.updateArtist(artistObj);
        },
        downVoteArtist() {
            let artistObj = this.artist;
            let voteObj = this.getVoteObj();

            /*
            Checking if artist is already disliked,
            in that case the dislike is removed
            */
            switch(voteObj.alreadyDownVoted) {
                case false:
                    artistObj.downVote++;
                    voteObj.alreadyDownVoted = true;
                    //Remove existing like
                    if(voteObj.alreadyUpVoted){
                        artistObj.upVote--;
                        voteObj.alreadyUpVoted = false;
                    }
                    break;
                case true:
                    artistObj.downVote--;
                    voteObj.alreadyDownVoted = false;
                    break;
                default:
                    console.log(voteObj.alreadyDownVoted);
            }
            
            this.setVoteObj(voteObj);
            this.updateArtist(artistObj);
        },
        //Getter for vote object
        getVoteObj() {
            let voteObj = {
                artistId: this.artist.artistId,
                alreadyUpVoted: false,
                alreadyDownVoted: false
            };
            const voteList = JSON.parse(localStorage.getItem('voteList')) || [];
            const index = voteList.findIndex( vote => vote.artistId == this.artist.artistId);
            voteObj = index == -1 ? voteObj : voteList[index];
            return voteObj;
        },
        //Setter for vote object
        setVoteObj(voteObj) {
            let voteList = JSON.parse(localStorage.getItem('voteList')) || [];
            const index = voteList.findIndex( vote => vote.artistId == this.artist.artistId);
            
            if( index == -1 ){
                voteList.push(voteObj);
            }else{
                voteList[index] = voteObj;
            }
            
            window.localStorage.setItem('voteList', JSON.stringify(voteList));
        }
        
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap');
h3, p, a {
    font-family: 'Roboto Condensed', sans-serif;
    text-decoration: none;
    color:black;
}

</style>