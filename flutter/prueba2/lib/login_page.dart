import 'package:flutter/material.dart';

class LoginPage extends StatelessWidget {
  const LoginPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Login Page')),
      floatingActionButton: FloatingActionButton(
        child: const Icon(Icons.add),
        onPressed: () {}, // Añadido onPressed vacío para evitar errores
      ),
      body: Container(
        child: Column(
          children: [
            SizedBox(width: double.infinity,)
          ],
        ) [
          ElevatedButton(
            onPressed: null,
            child: Text('Login'),
          ),
        ],
      ),
    ); // Cerrando Scaffold
  }
}
