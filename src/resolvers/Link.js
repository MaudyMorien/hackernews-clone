const postedBy = (parent, args, context) => (
    context.prisma.link({ id: parent.id }).postedBy()
)

const votes = (partent, args, context) => (
    context.primsma.link({ id: parent.id }).votes()
)
module.exports = {
    postedBy,
    votes
}