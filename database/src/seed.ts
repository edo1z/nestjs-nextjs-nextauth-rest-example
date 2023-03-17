import { prisma } from "./index";

async function main() {
  // Fetch all users
  const allUsers = await prisma.user.findMany();

  if (allUsers.length === 0) {
    console.log(
      "No users found. Please make sure you have at least one user in the database."
    );
    return;
  }

  // Use the first user's ID as author for all dummy posts
  const authorId = allUsers[0].id;

  // create 20 dummy posts
  const postPromises = Array.from({ length: 20 }).map((_, i) =>
    prisma.post.create({
      data: {
        title: `Post ${i + 1}`,
        content:
          `This is the content of Post ${
            i + 1
          }. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ` +
          `Sed ut lorem vitae tellus varius fermentum eu vitae turpis. Quisque ullamcorper velit purus, ` +
          `sed pretium lacus pharetra non. Donec tincidunt, metus vel laoreet pretium, diam justo blandit ` +
          `lectus, non dapibus odio ipsum nec arcu. Sed interdum.`,
        category: `Category ${(i % 5) + 1}`,
        author: authorId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    })
  );

  const posts = await Promise.all(postPromises);

  console.log({ posts });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
