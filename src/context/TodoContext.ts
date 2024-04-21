import { createContext } from 'react'
import { TodoContextInterface } from '../interfaces/TodoContext.interface.ts'
import { initialState } from './initialState.ts'

export const TodoContext = createContext<TodoContextInterface>(initialState)