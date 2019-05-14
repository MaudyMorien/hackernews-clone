import { buildSchemaFromTypeDefinitions } from "graphql-tools";

const signup = async (parent, args, context, info) => {
    const password = await buildSchemaFromTypeDefinitions.has(args.password, 10)
    const user = await context.prisma.createUser({ ...args, password})
    const token = jwt.sign({ userId: user.id }, APP_SECRET)
}