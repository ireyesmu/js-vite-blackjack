# Comandos útiles de Git

1. git init
    <!-- inicia un repositorio -->
2. git add .
    <!-- agrega al stage -->
3. git reset .
    <!-- retira del stage -->
4. git commit -m "comentario_del_commit"
    <!-- genera un commit en el branch actual -->
5. git checkout -- .
    <!-- todos los archivos con seguimiento se reconstruyen hasta el commit activo -->
6. git log
    <!-- listado completo de commits -->
7. git commit --amend
    <!-- para corregir el comentario del commit activo -->
8. git checkout -b nombre_rama
    <!-- genera una nueva rama de nombre 'nombre_rama' -->
9. git checkout nombre_rama
    <!-- para cambiar hacia rama 'nombre_rama' -->
<!-- git merge rama_a_fusionar -->
    <!-- integra la rama 'rama_a_fusionar' con la rama activa -->
10. git branch -d nombre_rama
    <!-- para borrar la rama 'nombre_rama' -->
11. git push
    <!-- para cargar los datos del commit al repositorio remoto -->
12. git commit -am "comentario_del_commit"
    <!-- para realizar add y commit en un solo paso -->
