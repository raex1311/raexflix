import mongoose, {Schema} from 'mongoose';


const metadataSchema2 = new Schema(
    {
        title: String,
        description: String,
        url: String,
        image: String,
        category: String,
        subtitle: String
    },
    {
        timestamps: true,
    }
)

const Metadata2 = mongoose.models.Metadata2 || mongoose.model("Metadata2", metadataSchema2);
export default Metadata2;