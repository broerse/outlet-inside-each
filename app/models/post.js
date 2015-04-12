import DS from "ember-data";

var Post = DS.Model.extend({
	title: DS.attr('string'),
	body: DS.attr('string')
});

Post.reopenClass({
FIXTURES:[
   {
      "id" : 1,
      "title" : "Best Post 1",
      "body" : "Body for Post 1"
   },
   {
      "id" : 2,
      "title" : "Best Post 2",
      "body" : "Body for Post 2"      
   },
   {
      "id" : 3,
      "title" : "Best Post 3",
      "body" : "Body for Post 3"     
   }
]
});

export default Post;