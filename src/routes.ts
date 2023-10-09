import { Router } from "express";
import { create } from "./http/controllers/user/create";
import { update } from "./http/controllers/user/update";
import { findAll } from "./http/controllers/user/find-all";
import { findById } from "./http/controllers/user/find-by-id";

const router = Router()

router.post('/user/create', create)
router.put('/user/update', update)
router.get('/user/find', findAll)
router.get('/user/find/:userId', findById)

export {router}