
const baseUrl = 'https://dev.codeleap.co.uk/careers/';


export default {
    getPosts:async ()=>{
        try{

            let options = {
                method: 'GET',
            };
            let response = await fetch(`${baseUrl}`, options);
            
            if (!response.ok) {
                throw new Error('Failed to post post');
            }
            
            const text = await response.text();
            const list = JSON.parse(text);

            return list;
        }
        catch(error){
            console.error('Error:', error);
        }
    },
        
    postPost:async ({username, title, content}:{username:string,title:string, content:string})=>{
        try{

            let options = {
                method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, title, content})
            };

            let response = await fetch(`${baseUrl}`, options);
            
            if (!response.ok) {
                throw new Error('Failed to post post');
            }

            const text = await response.text();
            const msg = JSON.parse(text);
            
            return {posted:true};
        }
        catch(error){
            console.error('Error:', error);
        }
    },
    editPost:async(objectId:number,newPost:{title:string,content:string})=>{
        try{
            let options = {
                method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
            };

            let response = await fetch(`${baseUrl}${objectId}/`, options);
            
            if (!response.ok) {
                throw new Error('Failed to update post');
            }

            
            return {edited:true};
        }
        catch(error){
            console.error('Error:', error);
        }
    },
    deletePost:async(objectId:number)=>{
        try{
            let options = {
                method: 'DELETE',
            };

            let response = await fetch(`${baseUrl}${objectId}/`, options);
            
            if (!response.ok) {
                throw new Error('Failed to delete post');
            }

            
            return {edited:true};
        }
        catch(error){
            console.error('Error:', error);
        }
    }
}