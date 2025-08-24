import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos correctly', () => {
    render(<TodoList />);
    
    // Check if initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
    
    // Check if completed todo has proper styling
    const completedTodo = screen.getByText('Write Tests').closest('li');
    expect(completedTodo).toHaveClass('completed');
  });

  test('adds a new todo', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');
    
    // Add a new todo
    await user.type(input, 'New Test Todo');
    await user.click(addButton);
    
    // Check if new todo is added
    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
    expect(input).toHaveValue('');
  });

  test('does not add empty todo', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const initialTodoCount = screen.getAllByRole('listitem').length;
    const addButton = screen.getByText('Add Todo');
    
    // Try to add empty todo
    await user.click(addButton);
    
    // Check that no new todo was added
    expect(screen.getAllByRole('listitem')).toHaveLength(initialTodoCount);
  });

  test('toggles todo completion status', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const todoItem = screen.getByText('Learn React').closest('li');
    
    // Initially should not be completed
    expect(todoItem).not.toHaveClass('completed');
    
    // Click to toggle completion
    await user.click(todoItem);
    
    // Should now be completed
    expect(todoItem).toHaveClass('completed');
    
    // Click again to toggle back
    await user.click(todoItem);
    
    // Should not be completed again
    expect(todoItem).not.toHaveClass('completed');
  });

  test('deletes a todo', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const initialTodoCount = screen.getAllByRole('listitem').length;
    const todoText = 'Learn React';
    
    // Find the delete button for the first todo
    const deleteButton = screen.getByLabelText(`Delete ${todoText}`);
    
    // Delete the todo
    await user.click(deleteButton);
    
    // Check that todo was deleted
    expect(screen.queryByText(todoText)).not.toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(initialTodoCount - 1);
  });

  test('shows empty message when no todos', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    // Delete all todos
    const deleteButtons = screen.getAllByLabelText(/Delete/);
    for (const button of deleteButtons) {
      await user.click(button);
    }
    
    // Check that empty message is shown
    expect(screen.getByText('No todos yet. Add one above!')).toBeInTheDocument();
  });

  test('adds todo by pressing enter', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    
    // Type and press enter
    await user.type(input, 'Todo with Enter{enter}');
    
    // Check if todo was added
    expect(screen.getByText('Todo with Enter')).toBeInTheDocument();
  });
});