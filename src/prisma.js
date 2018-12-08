import {Prisma} from 'prisma-binding';

const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'http://localhost:4466'
})

// prisma.query.users(null,'{id name email posts {id title content}}').then((data)=>{
//  console.log(JSON.stringify(data, null,2));
// });
// prisma.query.comments(null, '{id text author{id name} post{id title}}').then((data)=>{
//   console.log(JSON.stringify(data, null,2));
// })

// prisma.mutation.createPost({
//   data: {
//     title: "Nother post from project",
//     content: "<p>This is the third new post from project.</p>",
//     published:true,
//     private:false,
//     author: {
//       connect:{
//         id: "cjpeoand5001p0a22n7o4faev"
//       }
//     }
//   }
// },
// '{ id title content author{ name id  } }'
// )
// .then((data)=>{
//   console.log(JSON.stringify(data, null,2));
//  return prisma.query.users(null,'{id name email posts {id title content}}').then((data)=>{
//   console.log(JSON.stringify(data, null,2));
// })

// })
// .catch((error)=>{
//   console.log(JSON.stringify(error, undefined, 2));
// })
// prisma.mutation.updatePost({
//   where:{
//     id: "cjpeor40h002o0a22i7ibe1pn"
//   },
//   data:{
//     published: true
//   }
// },'{ id title content published}').then((data)=>{
//   console.log(JSON.stringify(data, null,2));
//   prisma.query.posts(null, '{id content published title}').then((data)=>{
//   console.log(JSON.stringify(data, null,2));
// })
// })
// prisma.query prisma.mutation prisma.subscription prisma.exists

const createPostForUser = async (authorId, data) => {
  const userExists = await prisma.exists.User({ id: authorId })

  if (!userExists) {
      throw new Error('User not found')
  }

  const post = await prisma.mutation.createPost({
      data: {
          ...data,
          author: {
              connect: {
                  id: authorId
              }
          }
      }
  }, '{ author { id name email posts { id title published } } }')

  return post.author
}

// createPostForUser('cjpeww0np008h0a22732p42l4', {
//     title: 'More great books to read',
//     content: 'The Elements of User Experience',
//     published: true,
//     private:false
// }).then((user) => {
//     console.log(JSON.stringify(user, undefined, 2))
// })

const updatePostForUser = async (postId, data) => {
  const postExists = await prisma.exists.Post({ id: postId })

  if (!postExists) {
      throw new Error('Post not found')
  }

  const post = await prisma.mutation.updatePost({
      where: {
          id: postId
      },
      data
  }, '{ author { id name email posts { id title published } } }')
  
  return post.author
}

// updatePostForUser("cjpewx8ut008p0a22pbmyd8zr", { published: false }).then((user) => {
//     console.log(JSON.stringify(user, undefined, 2))
// })