import mongoose, {Schema} from 'mongoose';


const metadataSchema = new Schema(
    {
        title: String,
        description: String,
        url: String,
        image: String,
        category: String,
        
    },
    {
        timestamps: true,
    }
)

const Metadata = mongoose.models.Metadata || mongoose.model("Metadata", metadataSchema);
export default Metadata;