<template>
    <article class="card border-0 col-lg-4 col-mg-4 col-sm-4 pt-4 px-4">
        <img class="artist-image card-img-top" :src="`https://localhost:5001/images/artist_images/${artist.image}`">
        <div class="card-body">
             <router-link :to="{name: 'ArtistView', params:  {
            id: artist.artistId}}">
            <h3>{{artist.artistName}}</h3>
            </router-link>

            <!--Like and dislike buttons-->
            <!--Classes is assigned to provide colors if a button have been clicked-->
            <i
                class="fas fa-thumbs-up"
                :class="{ 'text-success' : getVoteObj().alreadyUpVoted}"
                @click="upVoteArtist"
            />
            <p>{{ artist.upVote }}</p>

            <i 
                class="fas fa-thumbs-down"                
                :class="{ 'text-danger' : getVoteObj().alreadyDownVoted}"
                @click="downVoteArtist"
            />
            <p>{{ artist.downVote }}</p>
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
                    break;
                case true:
                    artistObj.upVote--;
                    voteObj.alreadyUpVoted = false;
                    break;
                default:
                    console.log(voteObj.alreadyUpVoted);
            }

            //Removing dislike
            if(voteObj.alreadyDownVoted){
                artistObj.downVote--;
                voteObj.alreadyDownVoted = false;
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
                    break;
                case true:
                    artistObj.downVote--;
                    voteObj.alreadyDownVoted = false;
                    break;
                default:
                    console.log(voteObj.alreadyDownVoted);
            }

            //Removing like
            if(voteObj.alreadyUpVoted){
                artistObj.upVote--;
                voteObj.alreadyupVoted = false;
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