import { Request, Response } from 'express';
import Turno from "../data/mongo/models/turnos.model";

export const createTurno = async (req: Request, res: Response) => {
    try {
        const newTurno = new Turno(req.body);
        const savedTurno = await newTurno.save();
        res.status(201).json(savedTurno)
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};

export const getAllTurnos = async (req: Request, res: Response) => {
    try {
        const turnos = await Turno.find();
        res.status(200).json(turnos);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

export const getTurnoById = async (req: Request, res: Response) => {
    try {
        const turno = await Turno.findById(req.params.id);
        // if (!turno) return res.status(404).json({ message: "Turno no encontrado" });
        res.status(200).json(turno);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

export const updateTurno = async (req: Request, res: Response) => {
    try {
        const updatedTurno = await Turno.findByIdAndUpdate(req.params.id, req.body, { new: true });
        // if (!updatedTurno) return res.status(404).json({ message: "Turno no encontrado"});
        res.status(200).json(updatedTurno);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};

export const deleteTurno = async (req: Request, res: Response) => {
    try {
        const deletedTurno = await Turno.findByIdAndDelete(req.params.id);
        // if (!deletedTurno) return res.status(404).json({ message: "Turno no encontrado"});
        res.status(200).json(deletedTurno);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};