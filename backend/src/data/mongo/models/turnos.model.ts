import mongoose, { Schema } from "mongoose";

const TurnosSchema  = new Schema({
    name: { type: String,
        required: [true, "El nombre es obligatorio"],
        trim: true,
        minlength: [3, "El nombre debe tener al menos 3 caracteres"],
        maxlength: [50, "El nombre no puede tener más de 50 caracteres"]
    },
    email: { type: String,
        required: [true, "El email es obligatorio"],
        unique: true,
        trim: true,
        match: [/.+@.+\..+/, "Por favor ingresa un email válido"]
    },
    phone: { type: String,
         required: [true, "El telefono es obligatorio"],
         match: [/^\d{10,15}$/, "El número de teléfono debe tener entre 10 y 15 dígitos"]
        },
    turno: { type: String,
         required: [true, "El turno es obligatorio"],
         enum: ["mañana", "tarde", "noche"],
         trim: true
         },
});

export default mongoose.model("Turno", TurnosSchema);